import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase credentials
// You can get these from your Supabase dashboard at https://app.supabase.com
const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript
export interface Customer {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip_code: string;
  notes?: string;
  created_at?: string;
}

export interface OrderItem {
  id?: string;
  order_id: string;
  menu_item_id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id?: string;
  order_id: string;
  customer_id: string;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  payment_method: 'cod' | 'upi' | 'card' | 'netbanking';
  payment_status: 'pending' | 'paid' | 'failed';
  order_date: string;
  created_at?: string;
}

// Helper functions for database operations
export async function saveCustomer(customer: Customer) {
  const { data, error } = await supabase
    .from('customers')
    .insert(customer)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function saveOrder(order: Order) {
  const { data, error } = await supabase
    .from('orders')
    .insert(order)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function saveOrderItems(items: OrderItem[]) {
  const { data, error } = await supabase
    .from('order_items')
    .insert(items);
  
  if (error) throw error;
  return data;
}

export async function getOrderById(orderId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, customer:customers(*), order_items(*)')
    .eq('order_id', orderId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getAllOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*, customer:customers(*), order_items(*)')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
}
