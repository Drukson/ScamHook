import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LevelSelection from '../screens/LevelSelection';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';
import { getRandomQuestions } from '../../constants/questionsData';

const Index = () => {
  const [stage, setStage] = useState<'home' | 'level' | 'quiz' | 'result'>('home');
  const [questions, setQuestions] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null); // Track selected level

  const handlePlay = () => {
    setStage('level');  // Navigate to level selection
  };

  const handleSelectLevel = (level: string) => {
    setSelectedLevel(level); // Store selected level
    const selectedQuestions = getRandomQuestions(level).map(q => ({ ...q, userAnswer: null }));
    setQuestions(selectedQuestions);
    setStage('quiz');  // Start quiz
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
    setStage('result');  // End quiz and show result
  };

  const handlePlayAgain = () => {
    if (selectedLevel) {
      handleSelectLevel(selectedLevel); // Restart quiz with the same level
    } else {
      setStage('level');  // If no level is selected, go to level selection
    }
    setScore(0);
    setCorrectAnswers(0);
  };

  const handleGoHome = () => {
    setStage('home');  // Redirect to home screen
    setScore(0);
    setCorrectAnswers(0);
    setQuestions([]);
  };

  return (
    <View style={{ flex: 1 }}>
      {stage === 'home' && <HomeScreen onPlay={handlePlay} />}
      {stage === 'level' && <LevelSelection onSelectLevel={handleSelectLevel} onGoBack={handleGoHome} />}
      {stage === 'quiz' && (
        <QuizScreen
          questions={questions}
          onQuizEnd={handleQuizEnd}
          onAnswer={handleAnswer}
          onQuit={handleGoHome}  // Pass handleGoHome to QuizScreen for quitting
        />
      )}
      {stage === 'result' && (
        <ResultScreen
          score={score}
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          questions={questions}
          onPlayAgain={handlePlayAgain}
          onGoHome={handleGoHome}  // Redirect to home screen on Home button click
        />
      )}
    </View>
  );
};

export default Index;
