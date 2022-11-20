<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use Faker\Factory as Faker;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        DB::table('employees')->insert([
            'id' => $faker->uuid(),
            'email' => $faker->email(),
            'fullname' => $faker -> name(),
            'username' => $faker->name(),
            'hash' => Hash::make('password'),
            'image' => $faker->imageUrl(),
            'occupation' => $faker->jobTitle(),
            'reftoken' => Hash::make('password'),
            'role' => $faker->numberBetween(0,9),
            'org_id' => $faker->uuid(),
        ]);
    }
}
