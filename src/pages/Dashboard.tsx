import React from 'react';
import {
  PageContainer,
  PageTitle,
  StatsGrid,
  StatCard,
  StatCardWrapper,
  StatLabel,
  StatValue
} from './styles/Dashboard.styles';

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle variant="h4">
        Dashboard
      </PageTitle>
      <StatsGrid>
        <StatCardWrapper>
          <StatCard>
            <StatLabel>
              Total Posts
            </StatLabel>
            <StatValue variant="h4">150</StatValue>
          </StatCard>
        </StatCardWrapper>
        <StatCardWrapper>
          <StatCard>
            <StatLabel>
              Active Users
            </StatLabel>
            <StatValue variant="h4">1,250</StatValue>
          </StatCard>
        </StatCardWrapper>
        <StatCardWrapper>
          <StatCard>
            <StatLabel>
              Comments
            </StatLabel>
            <StatValue variant="h4">3,427</StatValue>
          </StatCard>
        </StatCardWrapper>
        <StatCardWrapper>
          <StatCard>
            <StatLabel>
              Engagement Rate
            </StatLabel>
            <StatValue variant="h4">67%</StatValue>
          </StatCard>
        </StatCardWrapper>
      </StatsGrid>
    </PageContainer>
  );
};

export default Dashboard; 