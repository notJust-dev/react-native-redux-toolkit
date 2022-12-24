import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../balanceSlice';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default function TabOneScreen({}) {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={{ marginVertical: 40 }}>
        <Button
          title="Deposit 10$"
          onPress={() => {
            dispatch(deposit(10));
          }}
        />
        <Button
          title="Withdraw 10$"
          onPress={() => {
            dispatch(withdraw(10));
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Current Balance: {balance}</Text>
      </View>
    </View>
  );
}
