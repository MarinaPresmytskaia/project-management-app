import { Grid } from '@mui/material';
import { useCallback, useEffect } from 'react';

import AddBoardBtn from './components/AddBoardBtn/AddBoardBtn';
import Board from './components/Board/Board';

import BoardModal from './components/BoardModal/BoardModal';
import { useAppDispatch, useAppSelector } from '../../store';
import { closeBoardModal, getBoards, openBoardModal } from './slice/mainSlice';

function MainPage() {
  const boards = useAppSelector((state) => state.main.boards);
  const isBoardModalOpen = useAppSelector(
    (state) => state.main.isBoardModalOpen
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  const handleOpenBoardModal = useCallback(() => {
    dispatch(openBoardModal());
  }, [dispatch]);

  const handleCloseBoardModel = useCallback(() => {
    dispatch(closeBoardModal());
  }, [dispatch]);

  /*  const handleDecline = useCallback(() => {
    dispatch(closeDialog());
    dispatch(getBoards());
    dispatch(closeBoardModal());
  }, [dispatch]);

  const handleConfirm = useCallback(() => {
    navigate(`/board/${boardId}`);
    handleDecline();
  }, [boardId, handleDecline, navigate]);  */

  return (
    <Grid
      container
      spacing={3}
      gap={3}
      direction="row"
      alignContent="flex-start"
      margin="0 auto"
      padding="50px"
      height="75vh"
      maxWidth="1200px"
      width="100%"
    >
      {boards.map(({ id, title }) => (
        <Board key={id} id={id} titleBoard={title} />
      ))}
      <AddBoardBtn onClick={handleOpenBoardModal} />
      {isBoardModalOpen && <BoardModal onClose={handleCloseBoardModel} />}
    </Grid>
  );
}

export default MainPage;
