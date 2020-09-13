sleep 2
url="http://localhost:5000"
echo 
curl --silent -I "$url"  > actual.txt
if grep "200 OK" actual.txt; then
    let FOUND=1
else
    let FOUND=0
fi
rm -Rf actual.txt
echo "Removing log files"
if [ $FOUND = 0 ]; then
    echo "CURL HTTP TEST 1 ERROR: "
    exit 1
fi

echo "CURL HTTP TEST 1 SUCCESS"
exit 0