// Thông tin kết nối mới từ máy chủ vật lý qua Cloudflare Tunnel
const SUPABASE_URL = 'https://merely-cheque-appeals-sunset.trycloudflare.com';
const SUPABASE_ANON_KEY = 'sb_publishable_ublUNkIvVWK0ETY2h52pdA_CpbUOFoI';

// Khởi tạo client Supabase
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
