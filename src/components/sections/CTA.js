import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';
import ContactForm from '../common/ContactForm';

const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-purple), var(--primary-pink));
  color: var(--white);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 30px;
  font-size: 18px;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <CTASection id="contact">
        <Container>
          <Title>Готовы трансформировать ваш бизнес?</Title>
          <Description>
            Свяжитесь с нами, чтобы обсудить, как наши веб-решения и технологии ИИ 
            могут помочь вашему бизнесу достичь новых высот.
          </Description>
          <CTAButtons>
            <Button variant="secondary" onClick={openContactModal}>Связаться с нами</Button>
            <Button href="#services-list">Наши услуги</Button>
          </CTAButtons>
        </Container>
      </CTASection>
      
      <ContactForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service=""
      />
    </>
  );
};

export default CTA;
