<?php
/**
 *  This script is meant to be used only to register a Supe Admin on the server to for some security reasons.
*/

require_once realpath(__DIR__ . '/vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

class GenerateSuperAdminData {
    public function __construct()
    {
        
    }
    
    // connect to db
    protected function connectDB(){
        try {
            // MYSQL Config
            $servername = $_ENV["DB_HOST"];
            $username = $_ENV["DB_USERNAME"];
            $password = $_ENV["DB_PASSWORD"];
            $dbname = $_ENV["DB_DATABASE"];
            
            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
    
            if ($conn->connect_error) {
                return [
                    "error"=> true,
                    "conn"=>$conn,
                    "msg"=>"Connection failed: " . $conn->connect_error
                ];
            }
    
            return [
                "error"=> false,
                "conn"=>$conn,
                "msg"=> null
            ];
    
        } catch (\Exception $e) {
            echo("Error connecting to databas: failed to execute script ".$e->getMessage());
            return [
                "error"=> true,
                "conn"=>$conn,
                "msg"=>"Connection failed: " . $conn->connect_error
            ];
        }
    }
    
    // handle standard input from cli
    protected function input(string $prompt = null): string
    {
        echo $prompt;
        $handle = fopen ("php://stdin","r");
        $output = fgets ($handle);
        return trim ($output);
    }
    
    // generate uuid
    protected function guidv4($data)
    {
        assert(strlen($data) == 16);
    
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
    
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }
    
    
    // Main public Function
    public function startScript(){
    
        $db = $this->connectDB();
        $conn = $db["conn"];
        $error = $db["error"];
        $msg = $db["msg"];
    
        // if an error occur while connecting to db
        if($error){
            die($msg);
            echo "\n";
        }
    
        try {
            // ask user for input
            $email = $this->input("email address: ");
            $username = $this->input("username: ");
            $fullname = $this->input("fullname: ");
            $password = $this->input("password: ");
        
            // verify
            if(empty($email) || empty($username) || empty($fullname) || empty($password)){
                die("Invalid credentials supplied");
                echo "\n";
            }
        
            if(strlen($password) < 6){
                die("Invalid password supplied");
            }

            // check if a user with this email exists
            $sql1 = `SELECT * FROM users WHERE email='{$email}'`;
            $users = $conn->query($sql1);
        
            // insert data
            $uid = $this->guidv4(openssl_random_pseudo_bytes(16));
        
            print($users->num_rows);
        } catch (\Exception $e) {
            die("Error inserting record: ". $e->getMessage());
        }   
    }
}

$start = new GenerateSuperAdminData();
$start->startScript();