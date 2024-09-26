import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

type QuizScreenProps = {
  questions: any[];
  onQuizEnd: () => void;
  onAnswer: (isCorrect: boolean, questionIndex: number) => void;
  onQuit: () => void;  // Add prop for quit action
};

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onQuizEnd, onAnswer, onQuit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === currentQuestion.correct;
    onAnswer(isCorrect, currentQuestionIndex);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    } else {
      onQuizEnd();
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const getOptionStyle = (index: number) => {
    let borderColor = '#ffffff';
    return {
      borderColor: selectedOption === currentQuestion.options[index] ? '#8fb842' : borderColor,
      backgroundColor: selectedOption === currentQuestion.options[index] ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      borderWidth: selectedOption === currentQuestion.options[index] ? 3 : 1,
    };
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/shieldicon.png')} style={styles.logo} />
      </View>
      <View style={styles.progressBarContainer}>
        <View style={{ ...styles.progressBar, width: `${progressPercentage}%` }} />
      </View>
      <Text style={styles.progressText}>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </Text>
      <View style={styles.questionBox}>
        {currentQuestion.image ? (
          <Image source={currentQuestion.image} style={styles.questionImage} />
        ) : (
          <View style={styles.spacer} />
        )}
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.options}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelectOption(option)}
            style={[styles.optionButton, getOptionStyle(index)]}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Row for Quit and Next Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={onQuit} style={styles.quitButton}>
          <Text style={styles.quitButtonText}>Quit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.nextButton, !selectedOption && styles.nextButtonDisabled]}
          disabled={!selectedOption}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#180032',
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  progressBarContainer: {
    marginBottom: 20,
    backgroundColor: '#3b0a3d',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#fc3b50',
    borderRadius: 5,
  },
  progressText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  questionBox: {
    backgroundColor: '#2b0a3d',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  questionImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  spacer: {
    height: 30,
  },
  questionText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  options: {
    width: '100%',
  },
  optionButton: {
    padding: 15,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#33334d',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  quitButton: {
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  quitButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  nextButton: {
    padding: 10,
    backgroundColor: '#f14052',
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#57af47',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default QuizScreen;
