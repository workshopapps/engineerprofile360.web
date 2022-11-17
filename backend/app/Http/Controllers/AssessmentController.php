<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;

class AssessmentController extends Controller
{
    

    // @dreywandowski ---- delete an assessment
    public function deleteAss($id){
        $response = Assessment::where('id',$id)->get();
        if($response->isEmpty()){
            return response()->json('no records found for id '.$id, 404); 
        }
       $response->delete();
       return response()->json('deleted successfully', 200);   
    }

    /////////////////////////////////////////////////////
}
