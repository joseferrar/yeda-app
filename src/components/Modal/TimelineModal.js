import React from "react";
import { StyleSheet } from "react-native";
import { View, Modal } from "native-base";
import Timeline from "react-native-timeline-flatlist";

const TimelineModal = (props) => {
  const { open, setOpen, timeline1 } = props;
  return (
    <View flex={1}>
      <Modal
        isOpen={open}
        style={styles.backdrop}
        onClose={() => setOpen(false)}
        size="lg"
        avoidKeyboard
      >
        <Modal.Content>
          <Modal.CloseButton bg="#fff" />
          <Modal.Body>
            <Timeline
              data={timeline1}
              style={styles.list}
              timeStyle={{
                textAlign: "center",
                // backgroundColor: "#ff9797",
                color: "#000",
                width: 70,
                borderRadius: 8,
                left: 2,
              }}
              lineWidth={4}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default TimelineModal;

const styles = StyleSheet.create({});
