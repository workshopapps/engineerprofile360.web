<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateInterviewRequest;
use App\Http\Requests\InterviewRequest;
use Exception;
use App\Models\Interview;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class InterviewController extends Controller
{

    public function addInterview(CreateInterviewRequest $request): JsonResponse
    {
        try {
            $interview = Interview::create(["times_taken" => 0, ...$request->validated()]);
            return $this->sendResponse(false, null, 'Interview created', $interview, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Interview not created', $e->getMessage());
        }
    }

    public function getInterviews()
    {
        try {
            $interviews = Interview::with('stack')->paginate(10);
            return $this->sendResponse(false, null, 'Interviews retrieved', $interviews, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Unable to retrieve interviews', null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function getInterviewById($interviewId)
    {
        try {
            $interview = Interview::with('stack')->find($interviewId);
            if (!$interview) return $this->sendResponse(true, null, 'Interview not found', null, Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, 'Interview retrieved', $interview, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Error fetching interview", null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function getInterviewByStack($stackId)
    {
        try {
            $interviews = Interview::where('stack_id', $stackId)->get();

            if (!$interviews) {
                return $this->sendResponse(
                    true,
                    'Interviews for this stack do not exist',
                    'Interviews not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->sendResponse(
                false,
                null,
                'Interviews',
                $interviews,
                Response::HTTP_OK
            );
        } catch (Exception $e) {
            //throw $th;
            return $this->sendResponse(true, $e->getMessage(), "Interviews Not Found", null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function deleteInterview($id)
    {
        try {
            //code...
            $interviewCheck = Interview::where('id', $id)->exists();
            if (!$interviewCheck) {
                $interviewCheck = [];
                return $this->sendResponse(true, null, 'Interview does not exists', $interviewCheck, Response::HTTP_NOT_FOUND);
            }

            $deleted = Interview::where('id', $id)->delete();
            return $this->sendResponse(false, null, 'Interview deleted successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            //throw $th;
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_BAD_REQUEST);
        }
    }

    public function updateInterview(Request $request, $interviewId)
    {

        try {
            $updatedData = $request->all();
            //Get Interview to be updated
            $interview = Interview::find($interviewId);
            $checkInterview = Interview::where('id', $interviewId)->exists();
            //Return an error if fetching failed
            if (!$checkInterview) {
                return $this->sendResponse(true, null, 'Interview not found', null, Response::HTTP_NOT_FOUND);
            }

            $interview->update($updatedData);
            return $this->sendResponse(false, null, 'Interview updated', $updatedData, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Error fetching interview", null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function getInterviewByCompanyName($company)
    {
        try {
            $interview = Interview::where('company_name', $company)->get();
            if (!$interview)
                return $this->sendResponse(true, null, 'Interview not found', null, Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, 'Interview retrieved', $interview, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Error fetching interview", null, Response::HTTP_BAD_REQUEST);
        }
    }
}