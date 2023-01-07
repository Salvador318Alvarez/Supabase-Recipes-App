import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://kqlkvayabxmxqvrpjjid.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxbGt2YXlhYnhteHF2cnBqamlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxMzA5NDEsImV4cCI6MTk4ODcwNjk0MX0.YGBCbmkQOGDMiZ_T9ii-MV4eninbDEd7Xn4v1n-Kp7U'

const supabase = createClient(supabaseUrl,supabaseKey)

export default supabase