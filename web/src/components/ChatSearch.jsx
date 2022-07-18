// 채팅 키워드 검색창 & 검색 버튼에 대한 컴포넌트 작성
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

// chat 객체 하나를 인자로 받아 한 줄로 표현하기 위한 컴포넌트
function ChatSearch({onSearchKeySubmit}) {
    const [keyword, setkeyword] = useState("")

    const onkeywordChange = (e) => {
        setkeyword(e.target.value)
    }

    const onkeywordSubmit = (e) => {
        e.preventDefault()
        onSearchKeySubmit(keyword)
        setkeyword("")
    }
    
  return (
    <form>
    <br/>
      <Contddd>
        <TextField
          onChange={(e) => onkeywordChange(e)}
          value={keyword}
          id="outlined-multiline-static"
          variant="outlined"
          label="Keyword"
        />
        </Contddd >
        <Button type="submit"
          onClick={onkeywordSubmit}>Search</Button>
    </form>
  );

}
const Contddd = styled.div`
display : inline;
margine :50px;
padding :50px;

`;

const Button = styled.button`
display : inline;

width: 80px;
height: 80px;
background-color: white;
  border-color: #c8a951;
  border-radius: 5px;
  height : 50px;
`;

export default ChatSearch;