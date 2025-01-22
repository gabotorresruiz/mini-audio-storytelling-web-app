'use client';
import { type FC, ReactElement } from 'react';
import { useTheme } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Audio } from '@/types';
import { StyledAudio, StyledAudioContainer, StyledAudioItem, StyledAudioThumbnail } from './styles';

const AudioList: FC<{ audios: Audio[] }> = ({ audios }: { audios: Audio[] }): ReactElement => {
  const theme = useTheme();

  return (
    <StyledAudioContainer>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        gap={theme.spacing(4)}
      >
        {audios.map((audio: Audio) => (
          <StyledAudioItem key={audio.id}>
            <StyledAudioThumbnail src={audio.images.waveform_m} alt={audio.name} />
            <Typography variant="body1">{audio.name}</Typography>
            <StyledAudio controls>
              <source src={audio.previews['preview-hq-mp3']} type="audio/mp3" />
              Your browser does not support the audio element.
            </StyledAudio>
          </StyledAudioItem>
        ))}
      </Box>
    </StyledAudioContainer>
  );
};

export default AudioList;
