import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Alert,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image?: string; // Optional
  link?: string; // Optional
}

const PortfolioScreen: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [newProject, setNewProject] = useState<PortfolioItem>({
    id: "",
    title: "",
    description: "",
  });
  const [editProject, setEditProject] = useState<PortfolioItem | null>(null);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      setPortfolio([
        ...portfolio,
        { ...newProject, id: Date.now().toString() },
      ]);
      setNewProject({ id: "", title: "", description: "" });
      setModalVisible(false);
    }
  };

  const handleEditProject = (project: PortfolioItem) => {
    setEditProject(project);
    setEditModalVisible(true);
  };

  const handleDeleteProject = (id: string) => {
    setPortfolio(portfolio.filter((item) => item.id !== id));
  };

  const handleSaveEdit = () => {
    if (editProject) {
      setPortfolio(
        portfolio.map((item) =>
          item.id === editProject.id ? editProject : item
        )
      );
      setEditProject(null);
      setEditModalVisible(false);
    }
  };

  const confirmDelete = (id: string) => {
    Alert.alert(
      "Delete Project",
      "Are you sure you want to delete this project?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => handleDeleteProject(id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Portfolio</Text>
      </View>

      {/* Add Project Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add Project</Text>
      </TouchableOpacity>

      {/* Portfolio List */}
      <FlatList
        data={portfolio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.projectContainer}>
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.projectImage} />
            )}
            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>{item.title}</Text>
              <Text style={styles.projectDescription}>{item.description}</Text>
              {item.link && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.link)}
                  style={styles.projectLink}
                >
                  <Text style={styles.projectLinkText}>View More</Text>
                </TouchableOpacity>
              )}
              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEditProject(item)}
                >
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => confirmDelete(item.id)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        style={styles.portfolioList}
      />

      {/* Add Project Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Project</Text>
            <TextInput
              style={styles.input}
              placeholder="Project Title"
              placeholderTextColor="#000"
              value={newProject.title}
              onChangeText={(text) =>
                setNewProject({ ...newProject, title: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Project Description"
              placeholderTextColor="#000"
              value={newProject.description}
              onChangeText={(text) =>
                setNewProject({ ...newProject, description: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Image URL (optional)"
              placeholderTextColor="#000"
              value={newProject.image || ""}
              onChangeText={(text) =>
                setNewProject({ ...newProject, image: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Link (optional)"
              placeholderTextColor="#000"
              value={newProject.link || ""}
              onChangeText={(text) =>
                setNewProject({ ...newProject, link: text })
              }
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleAddProject}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Edit Project Modal */}
      {editProject && (
        <Modal visible={editModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Project</Text>
              <TextInput
                style={styles.input}
                placeholder="Project Title"
                placeholderTextColor="#000"
                value={editProject.title}
                onChangeText={(text) =>
                  setEditProject({ ...editProject, title: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Project Description"
                placeholderTextColor="#000"
                value={editProject.description}
                onChangeText={(text) =>
                  setEditProject({ ...editProject, description: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Image URL (optional)"
                placeholderTextColor="#000"
                value={editProject.image || ""}
                onChangeText={(text) =>
                  setEditProject({ ...editProject, image: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Link (optional)"
                placeholderTextColor="#000"
                value={editProject.link || ""}
                onChangeText={(text) =>
                  setEditProject({ ...editProject, link: text })
                }
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveEdit}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setEditModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 20,
    backgroundColor: "#FFF",
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  portfolioList: {
    flex: 1,
  },
  projectContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 1,
  },
  projectImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  projectContent: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  projectDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  projectLink: {
    marginTop: 10,
  },
  projectLinkText: {
    color: "#007BFF",
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#F44336",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default PortfolioScreen;
