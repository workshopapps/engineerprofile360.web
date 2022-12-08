<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Department;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Assessment>
 */
class AssessmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name" => fake()->name(),
            "start_date" => now()->toDateTimeString(),
            "start_time" => now()->toDateTimeString(),
            "end_date" => now()->toDateTimeString(),
            "end_time" => now()->toDateTimeString(),
            "department_id" => Department::factory()->create()->id,
            "org_id" => fake()->randomDigit()
        ];
    }
}
