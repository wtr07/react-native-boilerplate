import { Text, View, StyleSheet } from 'react-native';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    height: 44,
    width: '50%',
    backgroundColor: colors.lightPurple,
  },
});

export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Profile</Text>
      <Button
        title="Go to Details"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        onPress={() =>
          router.push({ pathname: '(main)/(tabs)/profile/details', params: { from: 'Details' } })
        }
      />
    </View>
  );
}
