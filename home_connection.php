<?php

$server = "localhost";
$username = "echee_2024";
$password = "Acad280!!!";
$dbname = "echee_acad2802024";

$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}

$sql = "SELECT * FROM travel";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
    echo "date,driving,cycling,walking,total_time,d_dist,c_dist,w_dist,total_dist,status,total_late,total_punctual,total_early,flying,f_dist,boat,b_dist\n";
    while($row = mysqli_fetch_assoc($result)){
        echo $row["date"] . "," . $row["driving"] . "," . $row["cycling"] . "," . $row["walking"] . "," . $row["total_time"] . "," . $row["d_dist"] . "," . $row["c_dist"] . "," . $row["w_dist"] . "," . $row["total_dist"] . "," . $row["status"] . "," . $row["total_late"] . "," . $row["total_punctual"] . "," . $row["total_early"] . "," . $row["flying"] . "," . $row["f_dist"] . "," . $row["boat"] . "," . $row["b_dist"] . "\r\n";
    }
}

mysqli_close($conn);

?>