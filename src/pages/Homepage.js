import Sidebar from '../components/layout/Sidebar';
import Suggestions from '../components/layout/Suggestions';
import FeedbackModal from '../components/FeedbackModal';

import { useState } from 'react';

export default function Homepage() {

    const [modalActive, setModalActive] = useState(false)

    function feedbackClickHandler() {
        setModalActive(true)
    }

  return (
    <>
      <Sidebar />
      <Suggestions feedbackClickHandler={feedbackClickHandler} />
      <FeedbackModal modalActive={modalActive}/>
    </>
  );
}
