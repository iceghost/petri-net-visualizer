<script>
    import Card from "$lib/components/Card.svelte";
</script>

<svelte:head>
    <title>Bài tập lớn Mô hình hóa Toán học | BOT20</title>
</svelte:head>

<main class="flex flex-col items-center py-8">
    <div class="w-full max-w-2xl">
        <img class="w-20 h-20" src="/logo.png" alt="logo bách khoa" />
        <p>Bài tập lớn</p>
        <h1 class="text-2xl font-bold uppercase tracking-wide">
            Ứng dụng mạng Petri
        </h1>
        <p class="text-right italic text-sm">Thực hiện bởi: BOT20</p>
        <p class="mt-8">
            Petri net hay mạng Petri, là một công cụ đồ họa được sử dụng một
            cách rộng rãi trong việc phân tích dữ liệu, mô phỏng, mô hình hóa
            lại quá trình kinh doanh và các kịch bản khác. Đây là một cấu trúc
            toán học có thể giúp trong việc xây dựng công việc kế hoạch hoặc
            trình bày dữ liệu trên các hệ thống phức tạp.
        </p>
        <p class="mt-4">
            Ở bài tập lớn lần này, nhóm đã hoàn thành việc trả lời cũng như mô
            phỏng lại một số mô hình mạng Petri được đề cập đến trong bài tập
            lớn. Việc mô phỏng lại giúp cho nhóm có cái nhìn rõ và tổng quan hơn
            về cách mà mạng Petri hoạt động, từ đó cho thấy được sự quan trọng
            của nó trong các công việc thực tiễn.
        </p>
        <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-4 mb-4">
            <Card
                title="Mạng Petri bác sĩ 🧑‍⚕️"
                description="Mô hình mạng Petri cho một bác sĩ trong phòng khám"
                imgSrc="/bac-si-covid.jpg"
                alt="Bác sĩ covid"
                href="/demo/1"
            />
            <Card
                title="Mạng Petri bệnh nhân 🙋"
                description="Mô hình mạng Petri cho các bệnh nhân khám bệnh"
                imgSrc="/nguoi-dan.webp"
                alt="Bệnh nhân xếp hàng"
                href="/demo/2"
            />
        </div>
        <Card
            title="Mạng Petri tổng hợp 🏥"
            description="Mô hình mạng Petri tổng hợp cho quá trình khám bệnh"
            imgSrc="/chua-benh.jpg"
            alt="Khám bệnh COVID"
            href="/demo/3"
        />

        <p class="mt-4 p-2 bg-blue-50 text-blue-900 rounded-md shadow-md text-justify">
            Qua bài tập lớn lần này, nhóm đã tìm hiểu và biết thêm rất nhiều
            kiến thức xoay quanh mạng Petri. Nhóm chúng em muốn gửi lời cảm ơn
            chân thành nhất đến các thầy cô phụ trách bộ môn khi đã cung cấp rất
            nhiều kiến thức cho nhóm có thể hoàn thành được bài tập lớn lần này
            và có thể hiểu thêm được một loại mô hình vẫn còn rất mới
            mẻ nhưng lại cực kì hữu ích trong cuộc sống thực tiễn!
        </p>

        <div class="text-right text-sm mt-4 border-t pt-2">
            <p class="italic">Thành viên nhóm:</p>
            <ul>
                <li>Nguyễn Tấn Phát</li>
                <li>Nguyễn Duy Khang</li>
                <li>Nguyễn Vĩnh Sang</li>
                <li>Nguyễn Phúc Bình Khang</li>
                <li>Trần Thanh Hải</li>
            </ul>
        </div>
    </div>
</main>
