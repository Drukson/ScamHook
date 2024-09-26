import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  // Import LinearGradient

const { width } = Dimensions.get('window');

const ResultScreen = ({ score, correctAnswers, totalQuestions, questions, onPlayAgain, onGoHome }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewWrongAnswers = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const wrongQuestions = questions
    .map((question, index) => ({ ...question, index: index + 1 }))
    .filter(question => question.userAnswer === false);

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpeg')} // Replace with your background image path
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          {score > 50 ? (
            <Image source={require('../../assets/images/congratulations.gif')} style={styles.congratulations} />
          ) : (
            <Image source={require('../../assets/images/tryagain.gif')} style={styles.tryAgain} />
          )}
        </View>

        <Text style={styles.header}>RESULTS</Text>
        <Text style={styles.reviewText}>REVIEW YOUR ANSWERS</Text>
        <View style={styles.answersSummary}>
          <View style={[styles.answerBadge, styles.correctAnswers]}>
            <Text style={styles.answerLabel}>CORRECT ANSWERS</Text>
            <View style={styles.correctNumber}>
              <Text style={styles.answerNumber}>{correctAnswers}</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.answerBadge, styles.wrongAnswers]} onPress={handleReviewWrongAnswers}>
            <View style={styles.wrongNumber}>
              <Text style={styles.answerNumber}>{totalQuestions - correctAnswers}</Text>
            </View>
            <Text style={styles.answerLabel}>WRONG ANSWERS</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#A44AFF', '#FC466B']}  // Specify the gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.scoreDisplay}      // Apply the style
        >
          <Text style={styles.scoreText}>YOUR FINAL SCORE</Text>
          <View style={styles.finalScoreCircle}>
            <Text style={styles.finalScore}>{score}</Text>
          </View>
        </LinearGradient>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPlayAgain} style={styles.playAgainButton}>
            <Text style={styles.buttonText}>↻ Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onGoHome} style={styles.homeButton}>
            <View style={styles.homeIcon}>
              <Image source={require('../../assets/images/homeicon.png')} style={styles.homeImage} />
            </View>
            <Text style={styles.homeButtonText}>HOME</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={isModalOpen}
          onRequestClose={closeModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={closeModal} style={styles.closeModalButton}>
                <Text style={styles.closeModalButtonText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Review Wrong Answers</Text>
              <ScrollView>
                {wrongQuestions.length > 0 ? (
                  wrongQuestions.map((question, index) => (
                    <View key={index} style={styles.wrongQuestion}>
                      <Text style={styles.questionNumber}>Question {question.index}</Text>
                      <Text style={styles.questionText}>
                        <Text style={styles.bold}>Q:</Text> {question.question}
                      </Text>
                      <Text style={styles.questionText}>
                        <Text style={styles.bold}>Correct Answer:</Text> {question.correct}
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.noWrongAnswers}>There are no wrong answers to review.</Text>
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  congratulations: {
    width: width * 0.80,
    height: width * 0.80,
    resizeMode: 'contain',
  },
  tryAgain: {
    width: width * 0.53,
    height: width * 0.53,
    resizeMode: 'contain',
    top: -10,
  },
  header: {
    fontSize: width * 0.11,
    color: '#0c98b5',
    marginBottom: 10,
    marginTop: -40,
    textAlign: 'center',
    fontWeight: '600',
  },
  reviewText: {
    fontSize: width * 0.05,
    color: '#815fab',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  answersSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  answerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 1,
    borderRadius: 25,
    minWidth: 130,
    justifyContent: 'space-between',
  },
  correctAnswers: {
    backgroundColor: '#98c13f',
    marginRight: 7,
    flex: 1,
  },
  wrongAnswers: {
    backgroundColor: '#f14052',
    marginLeft: 9,
    flex: 1,
  },
  correctNumber: {
    backgroundColor: '#57af47',
    color: 'white',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 13,
    marginLeft: 8,
    marginRight: -6,
    position: 'relative',
    right: 5,
  },
  wrongNumber: {
    backgroundColor: '#bd3c52',
    color: 'white',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 13,
    marginRight: 5,
    marginLeft: -8,
    position: 'relative',
    left: -7,
  },
  answerLabel: {
    fontSize: width * 0.028,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  answerNumber: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  scoreDisplay: {
    borderRadius: 20,
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  scoreText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  finalScoreCircle: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: '#FFCC00',
    borderRadius: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalScore: {
    fontSize: width * 0.12,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  playAgainButton: {
    padding: 15,
    backgroundColor: '#f14052',
    borderRadius: 40,
    marginBottom: 20,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.05,
    color: '#fff',
  },
  homeButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  homeIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f14052',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImage: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
  homeButtonText: {
    marginTop: 10,
    fontSize: width * 0.04,
    color: '#fff',
  },
  closeModalButton: {
    position: 'absolute',
    top: 50,
    right: 10,
    padding: 10,
    backgroundColor: '#f14052',
    borderRadius: 15,
    zIndex: 1,
  },
  closeModalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#2b0a3d',
    padding: 30,
    borderRadius: 15,
    width: '90%',
    maxWidth: 600,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fc3b50',
    textAlign: 'center',
  },
  wrongQuestion: {
    marginBottom: 20,
    backgroundColor: '#3b0e55',
    padding: 15,
    borderRadius: 10,
  },
  questionNumber: {
    fontSize: 18,
    color: '#00e5ff',
    marginBottom: 5,
  },
  questionText: {
    color: '#ffffff',
  },
  bold: {
    fontWeight: 'bold',
    color: '#fc3b50',
  },
  noWrongAnswers: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
});

export default ResultScreen;
