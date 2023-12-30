import React, { useState } from 'react';
import initialCardData from './initialCardData';
import {
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';

const FormBuilderCard = (props) => {
  const [cardData, useCardData] = useState(initialCardData);

  return cardData.columnOrder.map((columnId) => {
    const column = cardData.columns[columnId];
    const tasks = column.taskIds.map(taskId => cardData.tasks[taskId]);
    
    return (
      <Container>
        <Typography
          variant='h2'
          gutterBottom
          >
          {column.title}
        </Typography>
        {
          tasks && tasks.map(task => (
            <Card>
              <CardContent>
                {task.content}
              </CardContent>
            </Card>
          ))
        }
      </Container>
    )
    // return <Column key={column.id} column={column} tasks={tasks} />
  })
};

export default FormBuilderCard;
