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
            return response()->json(['error' => false, 'message' => 'no records found for id '.$ass_id], 404); 
        }
        $response->delete();   
        return response()->json(['error' => true, 'message' => 'deleted successfully'], 200); 
    }
    /////////////////////////////////////////////////////
}
