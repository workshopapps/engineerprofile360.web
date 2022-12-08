<?php

namespace Tests\Unit;

use Tests\TestCase;

use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\User;
use App\Models\Department;
use App\Models\Assessment;


class AssessmentTest extends TestCase
{
	use WithFaker, RefreshDatabase;

	public function testCanCreateAssessment()
	{
		$user = $this->authenticate();
		$department = Department::factory()->create([
			'org_id' => $user['org_id']
		]);

        $assessment = [
            "org_id" => $user['org_id'],
            "department_id" => $department->id,
            "name" => $this->faker->word,
            "start_date" => now()->toDateTimeString(),
            "start_time" => now()->toDateTimeString(),
            "end_date" => now()->toDateTimeString(),
            "end_time" => now()->toDateTimeString(),
        ];

    	$response = $this->withHeaders([
            'Authorization' => 'Bearer '. $user['accessToken'],
            'Accept' => 'application/json'
        ])->postJson('api/assessment/create',$assessment);

	    $response->assertStatus(201)->assertJson([
        	'message' => "Assessment created."
    	]);

	}
	
	public function testCanGetAssessmentByOrganization()
	{
		$user = $this->authenticate();
		$department = Department::factory()->create([
			'org_id' => $user['org_id']
		]);

		$assessment = Assessment::factory()->create([
			"org_id" => $user['org_id'],
			"department_id" => $department->id,
		]);
		// dd($user['accessToken']);
		
		$response = $this->withHeaders([
	        'Accept' => 'application/json',
	        'Content-Type' => 'application/json',
	        'Authorization' => 'Bearer ' . $user['accessToken'],
	    ])->getJson('/api/assessment/'.$user['org_id']);
	    $response->assertStatus(200)->assertJson([
        	'message' => "All assessments"
    	]);

   }

	
	public function testCanGetAcceptedAssessnment()
	{
		$user = $this->authenticate();
		$department = Department::factory()->create([
			'org_id' => $user['org_id']
		]);

		$assessment = Assessment::factory()->create([
			"org_id" => $user['org_id'],
			"department_id" => $department->id,
		]);
		// dd($user['accessToken']);
		
		$response = $this->withHeaders([
	        'Accept' => 'application/json',
	        'Content-Type' => 'application/json',
	        'Authorization' => 'Bearer ' . $user['accessToken'],
	    ])->getJson('/api/assessment/'.$user['org_id'].'/'.$user['id'].'/accepted-assessments');
	    $response->assertStatus(200)->assertJson([
        	'message' => "Accepted Assessments"
    	]);

   }


	public function testCanGetCompletedAssessment()
	{
		$user = $this->authenticate();
		$department = Department::factory()->create([
			'org_id' => $user['org_id']
		]);

		$assessment = Assessment::factory()->create([
			"org_id" => $user['org_id'],
			"department_id" => $department->id,
		]);
		
		$response = $this->withHeaders([
	        'Accept' => 'application/json',
	        'Content-Type' => 'application/json',
	        'Authorization' => 'Bearer ' . $user['accessToken'],
	    ])->getJson('/api/assessment/completed-assessments/'.$user['org_id'].'/'.$user['id']);
	    // dd($response->json());
	    $response->assertStatus(200)->assertJson([
        	'message' => "Completed Assessment"
    	]);

   }


   private function authenticate()
   {
        $organization = [
            "email" => $this->faker->email,
            "username" => $this->faker->username,
            "full_name" => $this->faker->name,
            "password" => $this->faker->password,
        ];       

    	$response = $this->postJson('api/auth/organization/register',$organization);

        $organization = [
            "email" => $organization["email"],
            "password" => $organization["password"],
        ];       

        $user = User::whereEmail($organization["email"])->update([
        	'isAdmin' => true,
        	'isVerified' => true,
        ]);

    	$response = $this->postJson('api/auth/organization/login',$organization);

        return $response->json()['data'];        

   }
}
