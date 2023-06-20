import React, { useState, useRef, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import '../dropdown.css'

const faqData = [
  {
    question: 'How long do flower bouquets typically last?',
    answer: 'Flower bouquets can last anywhere from 5 to 14 days, depending on the type of flowers and how well they are cared for. Its important to change the water, trim the stems, and remove any wilted flowers or leaves regularly to extend their lifespan.'
  },
  {
    question: 'Can I customize the flower bouquet?',
    answer: 'Yes, we offer customization options for flower bouquets. You can choose the type of flowers, colors, and arrangement style to create a personalized bouquet. Be sure to check with the florist to see what customization options they provide.'
  },
  {
    question: 'Do flower bouquets come with a vase?',
    answer: 'Yes, all our flower bouquets come with a complementary vase included in the price. When you purchase a bouquet from us, you can expect to receive a beautiful vase along with the flowers. This ensures that you have a suitable container to display and enjoy your bouquet immediately. You dont need to worry about purchasing a separate vase as it is already included with your order. Enjoy the convenience of receiving a complete package with both the flowers and a complementary vase.'
  },
  {
    question: 'How should I care for my flower bouquet?',
    answer: 'To care for your flower bouquet, make sure to place it in clean water mixed with floral preservative. Trim the stems at an angle before placing them in the water and remove any leaves that will be submerged. Keep the bouquet away from direct sunlight, drafts, and fruits to prevent premature wilting.'
  },
  {
    question: 'Can I request same-day delivery for flower bouquets?',
    answer: 'Yes, we offer same-day delivery for flower bouquets if you place your order before 12 PM (noon) local time. This allows us to process and arrange your order in time for delivery on the same day. Please note that same-day delivery availability may vary based on your location and the specific floral arrangements. We recommend checking the product details or contacting our customer support for more information on same-day delivery options.'
  }
];

const DropDown = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef(faqData.map(() => React.createRef()));

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      ref.current.style.maxHeight = index === activeIndex ? `${ref.current.scrollHeight}px` : '0px';
    });
  }, [activeIndex, contentRefs]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="dropdown-container">
      <h1>FAQ section</h1>
      {faqData.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <button
            type="button"
            className={`question-section ${index === activeIndex ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}>
            <div className="question-align">
              <h4 className="question-style">{item.question}</h4>
              <FiPlus
                className={`question-icon ${index === activeIndex ? 'rotate' : ''}`} />
            </div>
            <div
              ref={contentRefs.current[index]}
              className={`answer ${index === activeIndex ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropDown;

/*
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';

const useStyles = styled((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  question: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  },
  answer: {
    marginBottom: theme.spacing(2),
    width: '500px'
  }
}));

const DropDown = () => {
  const classes = useStyles();
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const faqData = [
    {
      question: 'How long do flower bouquets typically last?',
      answer: 'Flower bouquets can last anywhere from 5 to 14 days,
      depending on the type of flowers and how well they are cared for. Its important
      to change the water, trim the stems, and remove any wilted flowers or leaves
      regularly to extend their lifespan.'
    },
    {
      question: 'Can I customize the flower bouquet?',
      answer: 'Yes, many florists offer customization options for flower bouquets.
       You can often choose the type of flowers, colors, and arrangement style to create a
       personalized bouquet. Be sure to check with the florist to see what customization
       options they provide.'
    },
    {
      question: 'Do flower bouquets come with a vase?',
      answer: 'The inclusion of a vase with a flower bouquet depends on the florist or
      the specific product. Some bouquets are sold with a vase, while others may be sold
      without one. Its always a good idea to check the product description or contact the
      florist to confirm whether a vase is included.'
    },
    {
      question: 'How should I care for my flower bouquet?',
      answer: 'To care for your flower bouquet, make sure to place it in clean water
      mixed with floral preservative. Trim the stems at an angle before placing them in
      the water and remove any leaves that will be submerged. Keep the bouquet away from
      direct sunlight, drafts, and fruits to prevent premature wilting.'
    },
    {
      question: 'Can I request same-day delivery for flower bouquets?',
      answer: 'Many florists offer same-day delivery services for flower bouquets.
       However, availability may vary depending on your location and the time you place your order.
        Its recommended to contact the florist directly or check their website for information on
        same-day delivery.'
    }
  ];

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.question}>
        Select a question:
      </Typography>
      <List component="nav">
        {faqData.map((item, index) => (
          <ListItemButton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => handleQuestionClick(item.question)}
            selected={selectedQuestion === item.question}>
            <ListItemText primary={item.question} />
          </ListItemButton>
        ))}
      </List>
      {selectedQuestion && (
        <Typography variant="body1" className={classes.answer}>
          {faqData.find((item) => item.question === selectedQuestion).answer}
        </Typography>
      )}
    </div>
  );
};

export default DropDown; */