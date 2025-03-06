import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../../api/models/post.model";

interface Props {
  model: Post;
}

const PostItem = ({ model }: Props) => {
  const toggleLike = (postId: string) => {
    // setPosts(prevPosts =>
    //   prevPosts.map(post =>
    //     post.id === postId
    //       ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
    //       : post
    //   )
    // );
  };

  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: model.user.avatar }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <Text style={{ fontWeight: "bold" }}>{model.user.name}</Text>
      </View>
      <Image
        source={{ uri: model.media }}
        style={{ width: "100%", height: 300, marginVertical: 10, borderRadius: 10 }}
      />
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
        <TouchableOpacity onPress={() => toggleLike(model.id)}>
          <Text>like</Text>
        </TouchableOpacity>
        <Text>{model.likes} Likes</Text>
        <Text>{model.comments} Comments</Text>
      </View>
      <Text style={{ fontWeight: "bold" }}>{model.location}</Text>
      <Text>{model.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const MemoizedPostItem = React.memo(PostItem);

export { MemoizedPostItem as PostItem };
