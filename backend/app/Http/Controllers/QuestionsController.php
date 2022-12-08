<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Exception;
use App\Http\Requests\CreateQuestionRequest;
use App\Http\Requests\CSVQuestionRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Imports\QuestionsImport;
use App\Models\Assessment;
use App\Models\Category;
use App\Services\QuestionService;

class QuestionsController extends Controller
{
    public function uploadCsv(Request $request)
    {

        try {
            if (in_array(
                request()->file('your_file')?->getClientOriginalExtension(),
                ['csv', 'xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx']
            )) {
                Excel::import(new QuestionsImport, request()->file('your_file'));
                return $this->sendResponse(false, null, 'Question created', null, Response::HTTP_CREATED);
            } else {
                return $this->sendResponse(true, 'Invalid file extension', 'upload an excel file', null, Response::HTTP_BAD_REQUEST);
            }
        } catch (\Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'something went wrong', null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function addManually(CreateQuestionRequest $request): JsonResponse
    {
        try {
            $data = $request->validated();

            $output = array();
            for ($i = 0; $i < count($data['questions']); $i++) {
                $result = Question::create([
                    "category_id" => $data["category_id"],
                    "assessment_id" => $data["assessment_id"],
                    "company_id" => $data["company_id"],
                    ...$data['questions'][$i],
                    "options" => json_encode($data['questions'][$i]["options"]),
                    "correct_answers" => json_encode($data['questions'][$i]["correct_answers"]),
                ]);
                array_push($output, $result);
            }
            return $this->sendResponse(false, null, 'Question created', $output, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not created', $e->getMessage());
        }
    }

    public function addCSV(CSVQuestionRequest $request)
    {
        $payload = $request->validate();
        $base64 = $payload['base64'];
        $type = explode(",", $base64)[0];
        // if ($type != "") return;
        $data = explode("\n", base64_decode(explode(",", $base64)[1]));
        $assessment_id = $payload['assessment_id']??Assessment::create()
        $result = [];
        for ($i = 1; $i < count($data); $i++) {
            $item = explode(",", $data[$i]);
            $question = $item[0] ?? "Question";
            $option1 = $item[1] ?? "option1";
            $option2 = $item[2] ?? "option2";
            $option3 = $item[3] ?? "option3";
            $option4 = $item[4] ?? "option4";
            $answer = $item[5] ?? null;
            $category_id = Category::where("name", $item[6])->first()['id'];
            if ($category_id) {
                QuestionService::addQuestion($category_id, $assessment_id, $payload['company_id'], [
                    
                ]);
            }
        }
    }

    public function updateQuestion(CreateQuestionRequest $request, $question_id)
    {
        try {
            $updatedData = $request->all();

            // Get question by id
            $question = Question::find($question_id);
            $checkQuestions = Question::where('id', $question_id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(
                    true,
                    'Fetch Question By ID failed',
                    'Question does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            $question->update($updatedData);

            // send response
            return $this->sendResponse(false, null, 'Question updated', $updatedData, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not fetched', $e->getMessage());
        }
    }

    public function getQuestById($id): JsonResponse
    {
        try {
            $questions = Question::find($id);
            $checkQuestions = Question::where('id', $id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(true, 'Fetch Question By ID failed', 'No questions exist for this company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Question By ID failed', $e->getMessage());
        }
    }

    public function getQuestByAssId($id)
    {
        try {
            $questions = Question::where('assessment_id', $id)->get();
            foreach ($questions as $question) {
                $question->options = json_decode($question->options);
                $question->correct_answers = json_decode($question->correct_answers);
            }

            $checkQuestions = Question::where('assessment_id', $id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(true, "Fetch Question By Assessment ID failed", 'No Question Exist for this Assessment ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, "OK", $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Fetch Question By Assessment ID failed", $e->getMessage());
        }
    }


    public function getQuestByComId($id): JsonResponse
    {
        try {
            $questions = Question::where('company_id', $id)->get();
            $checkQuestions = Question::where('company_id', $id)->exists();
            if (!$checkQuestions) {
                return $this->sendResponse(true, 'Fetch Question By Company ID failed', 'No questions exist for this Company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $questions, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Question By Company ID failed', $e->getMessage());
        }
    }


    /**
     * Get all questions created by an Organization
     *
     * @param  string  $id
     * @return Response
     */
    public function getQuestByCatId($id)
    {
        try {
            $questions = Question::where('category_id', $id);
            if (!$questions->count()) return $this->sendResponse(true, "Fetch Question By Category ID failed", 'No Question Exist for this Category ID', null, Response::HTTP_NOT_FOUND);
            foreach ($questions as $question) {
                $question->options = json_decode($question->options);
                $question->correct_answers = json_decode($question->correct_answers);
            }
            return $this->sendResponse(false, null, "OK", $questions->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Fetch Question By Category ID failed", $e->getMessage());
        }
    }

    public function deleteQuestion($question_id)
    {
        try {

            // Get question by id
            $question = Question::find($question_id);
            if (!$question) {
                return $this->sendResponse(
                    true,
                    'Fetch Question By ID failed',
                    'Question does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            $question->delete();

            // send response
            return $this->sendResponse(false, null, 'Question Deleted', [], Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Question not fetched', $e->getMessage());
        }
    }
}