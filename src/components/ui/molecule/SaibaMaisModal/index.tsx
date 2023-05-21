import React, { useState } from "react";

import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  Title,
} from "./styles";
import { ActivityIndicator, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

const YOUTUBE_FRAME = 180;
interface SaibaMaisModalProps {
  name: string;
  description: string;
  videoId: string;
}

export const SaibaMaisModal = ({
  name,
  description,
  videoId,
}: SaibaMaisModalProps) => {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <Container>
      <Header>
        <Title>{name}</Title>
      </Header>
      {!videoReady ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <ActivityIndicator color="red" />
        </View>
      ) : null}
      <YoutubeIframe
        videoId={videoId}
        height={YOUTUBE_FRAME}
        onReady={() => setVideoReady(true)}
        webViewStyle={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      />
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Container>
  );
};
