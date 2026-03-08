import { createClient } from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mjyebsvoppkzybetpvsx.supabase.co'
const supabaseKey = 'sb_publishable_Fb7b28n0syJAuDwIM97HWg_ixg3dU0m'

window.supabase = createClient(supabaseUrl, supabaseKey)
