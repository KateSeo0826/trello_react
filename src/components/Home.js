import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
// import Icon from "@material-ui/core/Icon";
import BoardThumbnail from './BoardThumbnail';
// import { deleteBoard } from "../actions";
const Thumbnails = styled.div`
  flex: 2;
  height: 50%;
  margin: 0 auto ;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 35px;
  color: #909FA6;
  font-weight: bold;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;
/* const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  } 
`; */
const BoardContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 312px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;
/* const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`; */

const Home = ({ boards, boardOrder, dispatch, boardID }) => {
    // this is the home site that shows you your boards and you can also create a Board here.

    const [newBoardTitle, setNewBoardTitle] = useState("");

    const handleChange = e => {
        setNewBoardTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBoard(newBoardTitle));
    };
    /* const handleDeleteBoard = () => {
        dispatch(deleteBoard(boardID));
    } */

    const renderBoards = () => {
        return boardOrder.map((boardID, index) => {
            const board = boards[boardID];
            console.log(boardID);
            return (
                <BoardContainer>
                    <Link
                        key={boardID}
                        to={`/${board.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <BoardThumbnail {...board} />
                    </Link>
                </BoardContainer>
            );
        });
    };

    const renderCreateBoard = () => {
        return (
            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                <CreateTitle>Create a new Board</CreateTitle>
                <CreateInput
                    onChange={handleChange}
                    value={newBoardTitle}
                    placeholder="Your boards title..."
                    type="text"
                />
            </form>
        );
    };

    return (
        <HomeContainer>
            <Thumbnails>{renderBoards()}</Thumbnails>
            {renderCreateBoard()}
        </HomeContainer>
    );
};

const mapStateToProps = state => ({
    boards: state.boards,
    boardOrder: state.boardOrder

});


export default connect(
    mapStateToProps)(Home);
