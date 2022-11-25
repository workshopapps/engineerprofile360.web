<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Interview;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class InterviewController extends Controller
{
    public function getInterviews()
    {
        try {
           $interviews = Interview::paginate(10);
            return $this->sendResponse(false, null, 'Interviews retrieved', $interviews, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Unable to retrieve interviews',null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function getInterviewById($interviewId)
    {
        try {
            $interview = Interview::find($interviewId);
            if (!$interview) return $this->sendResponse(true, null, 'Interview not found', null, Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, 'Interview retrieved', $interview, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Error fetching interview", null, Response::HTTP_BAD_REQUEST);
        }
    }

    public function getInterviewByStack($stackId) {
        try {
            $interviews = Interview::where('stack_id', $stackId)->paginate(5);
         
            if( !$interviews) {
                return $this->sendResponse(
                    true,
                    'Interviews for this stack do not exist',
                    'Interviews not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );}

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
   

    public function deleteInterview($id){
        try {
            //code...
            $interviewCheck = Interview::where('id', $id)->exists();
            if(!$interviewCheck){
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
}
