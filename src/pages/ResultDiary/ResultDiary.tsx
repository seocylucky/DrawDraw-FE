import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledDiaryContainer,
  // StyledDrawingBook,
  StyledPageSlide,
  StyledRangeContainer,
  StyledRangeText,
} from './ResultDiary.style';
import { Header } from '../../components/Header/Header';
// import EmptySketchBook from '../../assets/EmptySketchBook.png';
import { MyDetailDiary } from '../../components/MyDetailDiary/MyDetailDiary';
import { NotMineDetailDiary } from '../../components/NotMineDetailDiary/NotMineDetailDiary';
import { Comment } from '../../components/Comment/Comment';
import { useParams } from 'react-router-dom';
import { getDiary } from '../../apis/getDiary';
import { ResultDiaryType } from '../../types/ResultDiary.type';

export const ResultDiary = () => {
  const { diarybookid, diaryid } = useParams<{ diarybookid: string; diaryid: string }>();
  const [isValue, setIsValue] = useState<number>(3);
  const [isComment, setIsComment] = useState(false);
  const [diaryData, setDiaryData] = useState<ResultDiaryType | null>(null);

  useEffect(() => {
    if (diarybookid && diaryid) {
      const fetchDiary = async () => {
        try {
          const data = await getDiary(diarybookid, diaryid);
          setDiaryData(data);
        } catch (error) {
          console.error('Error fetching diary:', error);
        }
      };
      fetchDiary();
    }
  }, [diarybookid, diaryid]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setIsValue(newValue);
  };

  const handleChangeMode = () => {
    setIsComment((prev) => !prev);
    console.log(isComment);
  };

  return (
    <StyledContainer>
      {/* 남의 일기일 때랑 헤더 분기 */}
      <Header isDrawing={false} isTotal />
      <StyledDiaryContainer>
        {!isComment ? (
          <>
            {diaryData?.isMine ? (
              <MyDetailDiary isData={{ ...diaryData }} />
            ) : (
              <NotMineDetailDiary onSelectMode={handleChangeMode} />
            )}
          </>
        ) : (
          <Comment onSelectMode={handleChangeMode} />
        )}
      </StyledDiaryContainer>
    </StyledContainer>
  );
};