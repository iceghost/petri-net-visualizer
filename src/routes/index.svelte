<script>
    import Card from '$lib/components/Card.svelte'
</script>

<main class="flex flex-col items-center py-8">
    <div class="w-full max-w-2xl">
        <img class="w-20 h-20" src="/logo.png" alt="logo bách khoa" />
        <p>Bài tập lớn</p>
        <h1 class="text-2xl font-bold uppercase tracking-wide">Ứng dụng mạng Petri</h1>
        <p>Nhóm: BOT20</p>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
            <Card title="Mạng Petri bác sĩ 🧑‍⚕️" description="Mô hình mạng Petri cho một bác sĩ trong phòng khám"
                imgSrc="/bac-si-covid.jpg" alt="Bác sĩ covid"
            />
            <Card title="Mạng Petri bệnh nhân 🙋" description="Mô hình mạng Petri cho các bệnh nhân khám bệnh"
                imgSrc="http://icdn.dantri.com.vn/zoom/1200_630/2019/07/08/nguoi-dan-xep-hang-kham-benh-tu-sang-som-5-1562588880261.jpg"
                alt="Bệnh nhân xếp hàng"
            />
            <Card title="Mạng Petri tổng hợp 🏥" description="Mô hình mạng Petri tổng hợp cho quá trình khám bệnh"
                imgSrc="https://file3.qdnd.vn/data/images/0/2021/09/15/vuongthuy/15092021vthuy21.jpg?dpi=150&quality=100&w=870"
                alt="Khám bệnh COVID"
                href="/demo/3"
            />
        </div>
    </div>
</main>
