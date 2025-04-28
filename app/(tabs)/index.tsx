import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const PUBLIC_BUCKET_URL = "https://coltie-uploads.s3.amazonaws.com/uploads/";

export default function NoticeDetailCard() {
  const [notice, setNotice] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    mockNotice();
  }, []);

  function mockNotice() {
    const dummyNotice = {
      id: "notice-4",
      title: "Mocked Notice Title",
      description: "This is a mocked description for testing purpose.",
      attachments: [
        {
          id: "file-1",
          fileName: "example-image.jpg",
          type: "image/jpeg",
          url: `${PUBLIC_BUCKET_URL}notice-4/example-image.jpg`,
        },
        {
          id: "file-2",
          fileName: "example-pdf.pdf",
          type: "application/pdf",
          url: `${PUBLIC_BUCKET_URL}notice-4/example-pdf.pdf`,
        },
      ],
    };
    setNotice(dummyNotice);
  }

  function handleTitleChange(text: string) {
    setNotice((prev: any) => ({ ...prev, title: text }));
    setIsChanged(true);
  }

  function handleDescriptionChange(text: string) {
    setNotice((prev: any) => ({ ...prev, description: text }));
    setIsChanged(true);
  }

  async function handleAttachmentUpload() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.All, base64: false });
    if (!pickerResult.canceled && pickerResult.assets.length > 0) {
      const file = pickerResult.assets[0];
      const newAttachment = {
        id: `attach-${Date.now()}`,
        url: file.uri,
        type: file.type || "image",
        file: file,
        name: file.fileName || file.uri.split('/').pop(),
      };
      setNotice((prev: any) => ({
        ...prev,
        attachments: [...(prev.attachments || []), newAttachment],
      }));
      setIsChanged(true);
    }
  }

  function handleSave() {
    alert("Saved locally! (No server)");
    setIsChanged(false);
    setEditMode(false);
  }

  if (!notice) {
    return <Text style={{ textAlign: "center", marginTop: 50 }}>Loading Mocked Notice...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      {editMode ? (
        <TextInput
          value={notice.title}
          onChangeText={handleTitleChange}
          style={styles.titleInput}
          placeholder="Title"
        />
      ) : (
        <Text style={styles.title}>{notice.title}</Text>
      )}

      {/* Description */}
      {editMode ? (
        <TextInput
          value={notice.description}
          onChangeText={handleDescriptionChange}
          style={styles.descriptionInput}
          placeholder="Description"
          multiline
        />
      ) : (
        <Text style={styles.description}>{notice.description}</Text>
      )}

      {/* Attachments */}
      <View style={styles.attachmentsContainer}>
        {notice.attachments && notice.attachments.map((att: any) => (
          <View key={att.id} style={styles.attachmentBox}>
            {att.type.startsWith("image") ? (
              <Image source={{ uri: att.url }} style={styles.image} />
            ) : (
              <Text style={styles.fileName}>{att.fileName}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Button title={editMode ? "Cancel" : "Edit"} onPress={() => setEditMode(!editMode)} />
        {editMode && (
          <>
            <Button title="Upload Attachment" onPress={handleAttachmentUpload} />
            <Button title="Save" onPress={handleSave} disabled={!isChanged} />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  titleInput: { fontSize: 24, fontWeight: "bold", marginBottom: 10, borderBottomWidth: 1 },
  description: { fontSize: 16, marginBottom: 10 },
  descriptionInput: { fontSize: 16, marginBottom: 10, height: 100, borderWidth: 1, padding: 8 },
  attachmentsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 10 },
  attachmentBox: { width: 100, height: 100, backgroundColor: "#eee", justifyContent: "center", alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 8 },
  fileName: { fontSize: 12, textAlign: "center" },
  buttonRow: { marginTop: 20, flexDirection: "column", gap: 10 },
});
