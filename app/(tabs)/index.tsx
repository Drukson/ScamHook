import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LevelSelection from '../screens/LevelSelection';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';
import { getRandomQuestions } from '../constants/questionsData';

const Index = () => {
  const [stage, setStage] = useState<'home' | 'level' | 'quiz' | 'result'>('home');
  const [questions, setQuestions] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handlePlay = () => {
    setStage('level');
  };

  const handleSelectLevel = (level: string) => {
    const selectedQuestions = getRandomQuestions(level).map(q => ({ ...q, userAnswer: null }));
    setQuestions(selectedQuestions);
    setStage('quiz');
  };

  const handleAnswer = (isCorrect: boolean, questionIndex: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((question, index) =>
        index === questionIndex ? { ...question, userAnswer: isCorrect } : question
      )
    );

    if (isCorrect) {
      setCorrectAnswers(prevCorrect => prevCorrect + 1);
      setScore(prevScore => prevScore + 10);
    }
  };

  const handleQuizEnd = () => {
    setStage('result');
  };

  const handlePlayAgain = () => {
    setStage('home');
    setScore(0);
    setCorrectAnswers(0);
    setQuestions([]);
  };

  const handleGoHome = () => {
    setStage('home');
    setScore(0);
    setCorrectAnswers(0);
    setQuestions([]);
  };

  return (
    <View style={{ flex: 1 }}>
      {stage === 'home' && <HomeScreen onPlay={handlePlay} />}
      {stage === 'level' && <LevelSelection onSelectLevel={handleSelectLevel} onGoBack={handleGoHome} />}
      {stage === 'quiz' && <QuizScreen questions={questions} onQuizEnd={handleQuizEnd} onAnswer={handleAnswer} />}
      {stage === 'result' && (
        <ResultScreen
          score={score}
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          questions={questions}
          onPlayAgain={handlePlayAgain}
          onGoHome={handleGoHome}
        />
      )}
    </View>
  );
};

export default Index;
