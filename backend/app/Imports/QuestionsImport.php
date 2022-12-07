<?php

namespace App\Imports;

use App\Models\Question;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class QuestionsImport implements ToModel,WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return Question|null
     */
    public function model(array $row)
    {
        $options_array = json_encode(array('option_a'=>$row['option_a'],'option_b'=>$row['option_b'],
        'option_c'=>$row['option_c'],'option_d'=>$row['option_d']));

        if ($row['is_multiple_answers']==0) {
            $correct_answer = json_encode(array('correct_answer_1'=>$row['correct_answer_1']));
        }
        else if($row['is_multiple_answers']==1){
            $correct_answer = json_encode(array('correct_answer_1'=>$row['correct_answer_1'],'correct_answer_2'=>$row['correct_answer_2']));
        }

        return new Question([
          
           'options'    => $options_array,
           'timeframe'=> $row['timeframe'],
           'correct_answers'=> $correct_answer,
           'is_multiple_answers'=> $row['is_multiple_answers'],
           'question'  => $row['question'],
           'category_id'=> request()->category_id,
           'assessment_id'=>  request()->assessment_id,
           'company_id'=>  request()->company_id,
        ]);
    }
}