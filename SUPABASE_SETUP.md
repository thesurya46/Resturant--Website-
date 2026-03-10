# Supabase Database Setup

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project" 
3. Enter your project name (e.g., "Food Hub")
4. Enter a secure password
5. Choose a region closest to India (e.g., Mumbai - ap-south-1)
6. Click "Create new project"
7. Wait for the project to be set up (2-3 minutes)

## Step 2: Get Your Credentials

1. In your Supabase dashboard, go to **Project Settings** (⚙️ icon)
2. Click on **API**
3. Copy the **Project URL** and **anon public** key

## Step 3: Run the SQL Schema

1. In Supabase dashboard, go to **SQL Editor** (in the left sidebar)
2. Copy and paste the SQL below and click **Run**

```sql
-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id TEXT UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  total DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_method TEXT DEFAULT 'cod',
  payment_status TEXT DEFAULT 'pending',
  order_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id TEXT NOT NULL,
  menu_item_id TEXT NOT NULL,
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER NOT NULL,
  image TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- Enable Row Level Security (RLS)
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (for this demo - in production, restrict this)
CREATE POLICY "Enable all access for customers" ON customers FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for orders" ON orders FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for order_items" ON order_items FOR ALL USING (true) WITH CHECK (true);
```

## Step 4: Update Your Application

1. Open `src/app/lib/supabase.ts`
2. Replace `YOUR_SUPABASE_PROJECT_URL` with your actual Project URL
3. Replace `YOUR_SUPABASE_ANON_KEY` with your anon public key

## Step 5: Verify Installation

The application will now:
- ✅ Play a notification sound when items are added to cart
- ✅ Show toast notifications
- ✅ Store orders in Supabase database
- ✅ Show order confirmation animation with sound

## Database Schema Overview

### customers table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| full_name | TEXT | Customer's full name |
| phone | TEXT | Phone number (India format) |
| email | TEXT | Email address |
| address | TEXT | Delivery address |
| city | TEXT | City name |
| zip_code | TEXT | PIN code |
| notes | TEXT | Delivery notes |
| created_at | TIMESTAMP | Creation timestamp |

### orders table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| order_id | TEXT | Unique order ID |
| customer_id | UUID | Foreign key to customers |
| total | DECIMAL | Order total |
| status | TEXT | Order status |
| payment_method | TEXT | Payment method |
| payment_status | TEXT | Payment status |
| order_date | TIMESTAMP | Order date |
| created_at | TIMESTAMP | Creation timestamp |

### order_items table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| order_id | TEXT | Reference to order |
| menu_item_id | TEXT | Menu item ID |
| name | TEXT | Item name |
| price | DECIMAL | Item price |
| quantity | INTEGER | Quantity |
| image | TEXT | Item image URL |
