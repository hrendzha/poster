import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../components/Header/Header";
import { HeaderLogoutBtn } from "../components/HeaderLogoutBtn/HeaderLogoutBtn";
import { COLOR_PALETTE, SECTION_PADDINGS } from "../styles/styles";
import { Post } from "../api/models/post.model";
import { PostItem } from "../components/PostItem/PostItem";

const fetchMockPosts = async (count: number = 5, startId: number = 1): Promise<Post[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const posts: Post[] = Array.from({ length: count }).map((_, index) => {
        const id = startId + index;

        return {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          user: {
            name: `User ${id}`,
            avatar: `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`,
          },
          media: `https://picsum.photos/800/600?random=${id}`,
          likes: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 20),
          location: "Ivano-Frankivs'k Region, Ukraine",
          description: "This is a sample description for the post.",
          liked: false,
        };
      });
      resolve(posts);
    }, 1500);
  });
};

let i = 0;

const PostsScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const insets = useSafeAreaInsets();

  const loadPosts = async () => {
    if (noMorePosts || isFetching) return;

    try {
      setIsFetching(true);
      setLoading(true);

      const newPosts = await fetchMockPosts(i < 2 ? 5 : 0, posts.length + 1);

      if (newPosts.length === 0 && posts.length > 0) {
        setNoMorePosts(true);
      } else {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
      }

      i++;
    } catch (error) {
      console.log("catch", error);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  };

  const getListFooterComponent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color={COLOR_PALETTE.primary}
          style={posts.length === 0 ? styles.loaderTop : styles.loaderBottom}
        />
      );
    }

    if (noMorePosts) {
      return <Text style={styles.noMorePostsText}>No more posts 😿</Text>;
    }

    return null;
  };

  const renderItem = ({ item }: ListRenderItemInfo<Post>) => <PostItem model={item} />;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header title="Публікації" rightAction={<HeaderLogoutBtn />} />

      <View style={styles.listWrap}>
        {posts.length === 0 && !loading ? (
          <Text style={styles.noPostsText}>No posts available 😿</Text>
        ) : (
          <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onEndReached={loadPosts}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={getListFooterComponent}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listWrap: {
    flex: 1,
    paddingHorizontal: SECTION_PADDINGS,
  },
  loaderTop: {
    paddingTop: 32,
  },
  loaderBottom: {
    paddingVertical: 10,
  },
  noMorePostsText: {
    textAlign: "center",
    paddingVertical: 10,
  },
  noPostsText: {
    paddingVertical: 24,
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    textAlign: "center",
  },
});

export { PostsScreen };
