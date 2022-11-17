<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionsController extends Controller
{
    public function updateQuestion(Request $request, $quest_id, $ass_id)
    {
        // attempts to validate data coming for the update of the question model
        $validator = Validator::make($request->all(),[

                'question_id' => "required",
                'assessment_id' => "required",
                'category_id' => "required",
                'question' => 'required|string',
                'wrong_answers' => 'required|string',
                'correct_answers' => 'required|string',
                'option' => 'required|string',
                'timeframe' => 'required|string',
                'is_multiple_answer' => 'required|boolean'

            ]
        );

        // when validation of the data from the request fails
        if ($validator->fails())
        {
            return sendResponse(true, 422, "Validation fails", $validator->errors());
        }

        $validatedData = $validator->validated();

        // fetech the Question to be updated

        $question = Question::find($quest_id);

        $question->question = $validatedData['question'];
        $question->options = $validatedData['options'];
        $question->timeframe = $validatedData['timeframe'];
        $question->correct_answers = $validatedData['correct_answers'];
        $question->is_multiple_answer = $validatedData['is_multiple_answer'];
        $question->category_id = $validatedData['category_id'];
        $question->assessment_id = $validatedData['ass_id'];
        $question->save();


        return sendResponse(true, 200, "Question Updated Successfully", $question);

    }
}
