<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AssessmentController extends Controller
{
    

    // @dreywandowski ---- delete an assessment
    public function deleteAss($ass_id){
        try{
        $response = Assessment::findorFail($ass_id); 
        }
        catch(ModelNotFoundException $e){
            return sendResponse(false, 404, "no records found for id ".$ass_id,[] );
        }
        $response->delete();   
        return sendResponse(true, 200, "deleted successfully ", []);
    }
    /////////////////////////////////////////////////////
}

