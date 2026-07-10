// Thông tin kết nối từ tài khoản Supabase của bạn
const SUPABASE_URL = 'https://ciqophqzbmkplgkdccwd.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ublUNkIvVWK0ETY2h52pdA_CpbUOFoI';

// Khởi tạo client Supabase (Đổi tên thành _supabase để tránh xung đột với thư viện gốc)
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);