#!/bin/bash
sleep 2
url="http://localhost:5000"
response=$(curl -s --silent -o /dev/null -w "%{http_code}\n" $url)
echo "Http request received reposnse: " $response
if [ "$response" != "200" ]
    then
    exit 1
fi