import { withTiming, runOnJS } from 'react-native-reanimated';

export const handleLoaderProgress = ({
  setProgress,
  setProgressIndex,
  isGoing,
  count,
  length,
  id,
}) => {
  setProgress(prevProgress => {
    if (Number(prevProgress) < 0.4 && !isGoing) {
      return prevProgress;
    } else {
      return isGoing ? prevProgress + count : prevProgress - count;
    }
  });

  if (setProgressIndex) {
    setProgressIndex(prevProgressIndex => {
      if (
        (prevProgressIndex === 1 && !isGoing) ||
        (prevProgressIndex === length && isGoing)
      ) {
        return prevProgressIndex;
      } else {
        return isGoing ? id + 1 : prevProgressIndex - 1;
      }
    });
  }
};

export const formatDateForProcedures = date => {
  const trimmedDateString = '2024-12-23T00:16:19.9684529'.replace(
    /\.\d+/,
    match => match.substring(0, 4)
  );
  const newDate = new Date(trimmedDateString);

  return newDate;
};

export const formatDate = dateString => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero to day
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

  return `${day}/${month}/${year}`;
};

export const formatDateToString = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
  const year = date.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
};

export const handleNextCardClick = ({
  prevIndex,
  index,
  currentIndex,
  dataLength,
  animatedValue,
  handleProgress,
  setZIndex,
  id,
  formProps,
  setIsReverse,
}) => {
  setIsReverse(false);

  if (currentIndex.value !== dataLength - 1) {
    animatedValue.value = withTiming(currentIndex.value + 1, {}, () => {
      currentIndex.value += 1;
      prevIndex.value = currentIndex.value;
    });
  }

  handleProgress(true, id);
  setZIndex(-Math.abs(dataLength - index));

  if (formProps) {
    formProps?.setErrors({});
  }
};

export const handleBackCardClick = ({
  prevIndex,
  cards,
  currentIndex,
  animatedValue,
  handleProgress,
}) => {
  if (
    prevIndex.value >= 0 &&
    cards[prevIndex.value] &&
    cards[prevIndex.value - 1]?.setIsReverse
  ) {
    runOnJS(cards[prevIndex.value - 1].setIsReverse)(true);
    runOnJS(cards[prevIndex.value - 1].setZIndex)(
      cards[prevIndex.value].zIndex + 1
    );
  }

  if (currentIndex.value > 0 && cards[currentIndex.value]?.setCanClick) {
    animatedValue.value = withTiming(currentIndex.value - 1, {}, () => {
      runOnJS(cards[currentIndex.value].setCanClick)(false);
      currentIndex.value -= 1;
      prevIndex.value = currentIndex.value;

      if (currentIndex.value >= 0 && cards[currentIndex.value]) {
        runOnJS(cards[currentIndex.value].setIsVisible)(true);
        runOnJS(cards[currentIndex.value].setCanClick)(true);
      }
    });
  }

  handleProgress(false, currentIndex.value);
};

export const createWeekArray = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const result = [];

  for (let i = -3; i <= 3; i++) {
    const date = new Date();

    date.setDate(today.getDate() + i);

    result.push({
      day: daysOfWeek[date.getDay()],
      date: date.getDate(),
    });
  }

  return result;
};
