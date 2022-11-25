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
}
