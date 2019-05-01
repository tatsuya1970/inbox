pragma solidity ^0.4.25;

contract Inbox {
    string public message;

    //契約と同じ名前の関数は、契約が最初に作成される時に自動的に1回呼び出せれる
    //最近のsolidityではconstructorの書き方が変わっているにで注意
    // function Inbox(string initialMessage) public {
    //     message = initialMessage;
    // }
   
    constructor (string initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string newMessage) public {
        message =  newMessage;
    }
}

