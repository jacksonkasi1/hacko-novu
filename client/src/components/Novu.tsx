import React, { FC } from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

interface NovuProps {
  subscriberId: string;
  applicationIdentifier: string;
}

const Novu: FC<NovuProps> = ({ subscriberId, applicationIdentifier }) => {
  const navigate = useNavigate();
  const onNotificationClick = (notification: any) =>
    navigate(notification.cta.data.url);

  return (
    <>
      <NovuProvider
        subscriberId={subscriberId}
        applicationIdentifier={applicationIdentifier}
        // initialFetchingStrategy={{
        // 	fetchNotifications: true,
        // 	fetchUserPreferences: true,
        // }}
      >
        <PopoverNotificationCenter
          onNotificationClick={onNotificationClick}
          colorScheme="light"
        >
          {({ unseenCount }: any) => (
            <NotificationBell unseenCount={unseenCount} />
          )}
        </PopoverNotificationCenter>
      </NovuProvider>
    </>
  );
};

export default Novu;