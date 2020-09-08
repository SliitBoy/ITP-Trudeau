/*<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;

//show all entries
if ($request == 1){
    $userData = mysqli_query($con, "SELECT accounts student.registrationID  FROM accounts INNER JOIN students ON accounts.nic = student.accounts_nic ORDER BY students.registrationID DESC");

    $response = array();
    while($row = mysqli_fetch_assoc($userData)){
        $response[] = $row;
    }

    echo json_encode($response);
    exit;
}

//creating records
if ($request == 2){
    $nic = $data -> nic;
    $username = $data -> username;
    $name = $data -> name;
    $email = $data -> email;
    $contactNumber = $data -> contactNumber;

    $userData = mysqli_query($con, "SELECT * FROM accounts WHERE username = '".$username."'");
    if (mysqli_num_rows(userData) == 0){
        mysqli_query($con, "INSERT INTO accounts(nic, username, name, email, contactNumber) VALUES ('".$nic."', '".$username."', '".$email."')");
        mysqli_query($con, "INSERT INTO student(registrationID) VALUES ('.$registrationID.')");
        echo "Student Account Creation Successful";
    }
    else{
        echo "Username exists";
    }
    exit;
}

//modifying existing records
if ($request == 3){
    $registrationID = $data ->registrationID;
    $nic = $data ->nic;
    $username = $data ->username;
    $name =$data ->name;
    $email = $data ->email;
    $contactNumber= $data ->contactNumber;

    mysqli_query($con, "UPDATE student SET registrationID = '.$registrationID.' WHERE nic = '.$nic.'");
    mysqli_query($con, "UPDATE accounts SET username = '.$username.' name = '.$name', email = '.$email.' contactNumber = '.$contactNumber.' WHERE nic = '.$nic.'");

    echo "Student Account Updated Successfully";
    exit;   
}

//delete existing records
if ($request == 4){
    $nic = $data->nic;

    mysqli_query($con, "DELETE FROM accounts WHERE nic =" .$nic);
    echo "Account Successfully Deleted";
    exit;
}*/
