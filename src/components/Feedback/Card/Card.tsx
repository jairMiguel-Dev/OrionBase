import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, Stack } from '@mui/material';
import { useState } from 'react';
import CustomModal from '../../Utils/Modal/Modal';
import type { BasicCardProps } from './Card.types';
import { Icon } from '@mui/material';


export default function BasicCard({
  title,
  description,
  type,
  mainCode,
  buttonText,
  buttonText2,
  exampleModal,
  exerciseModal,
  children,
  onClick,
  icon
}: BasicCardProps) {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '35.55rem',
        borderRadius: 4,
        bgcolor: 'common.gray',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
        }
      }}
    >
      <CardContent sx={{ p: 3, margin: 'auto', '&:hover': {transform: 'translateY(-4px)', boxShadow: '0px 8px 30px rgba(0,0,0,0.1)'}}}
      >
        <Icon sx={{ mr: 3, mb: 2, backgroundColor: 'primary.dark', color: 'common.white', borderRadius: 2, p: 1}}>
          {icon}
        </Icon>



        <Typography gutterBottom variant="overline" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 1 }}>
          {title}
        </Typography>

        {description && (
            <Typography variant="h5" component="div" sx={{ fontWeight: 800, mb: 1, color: 'primary.dark' }}>
                {description}
            </Typography>
        )}

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          {type}
        </Typography>

        <Box
          sx={{
            backgroundColor: 'grey.900',
            color: 'common.white',
            p: 2.5,
            borderRadius: 2,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {mainCode && (
            <>
              <Typography variant="caption" sx={{ display: 'block', mb: 1, opacity: 0.5, textTransform: 'uppercase' }}>
                Exemplo
              </Typography>
              {mainCode}
            </>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
        {buttonText && (
          <Button
            variant="contained"
            disableElevation
            size="medium"
            sx={{ borderRadius: 2, px: 3 }}
            onClick={onClick ? onClick : () => setIsExampleOpen(true)}
          >
            {buttonText}
          </Button>
        )}

        {buttonText2 && exerciseModal && (
          <Button
            variant="outlined"
            size="medium"
            onClick={() => setIsExerciseOpen(true)}
            sx={{ borderRadius: 2, px: 3 }}
          >
            {buttonText2}
          </Button>
        )}
      </CardActions>

      {children && (
        <>
          <Divider />
          <Box sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Stack spacing={2}>
              {children}
            </Stack>
          </Box>
        </>
      )}

      {/* Basic Example Modal */}
      {exampleModal && (
        <CustomModal
          open={isExampleOpen}
          onClose={() => setIsExampleOpen(false)}
          {...exampleModal}
        />
      )}

      {/* Exercise Modal */}
      {exerciseModal && (
        <CustomModal
          open={isExerciseOpen}
          onClose={() => setIsExerciseOpen(false)}
          {...exerciseModal}
        />
      )}
    </Card>
  );
}
