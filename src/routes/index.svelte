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

        <!-- <p
            class="mt-4 p-2 bg-blue-50 text-blue-900 rounded-md shadow-md text-justify"
        >
            Qua bài tập lớn lần này, nhóm đã tìm hiểu và biết thêm rất nhiều
            kiến thức xoay quanh mạng Petri. Nhóm chúng em muốn gửi lời cảm ơn
            chân thành nhất đến các thầy cô phụ trách bộ môn khi đã cung cấp rất
            nhiều kiến thức cho nhóm có thể hoàn thành được bài tập lớn lần này
            và có thể hiểu thêm được một loại mô hình vẫn còn rất mới mẻ nhưng
            lại cực kì hữu ích trong cuộc sống thực tiễn!
        </p> -->

        <div
            class="text-right text-sm mt-4 border-t pt-2 flex flex-col items-end"
        >
            <p class="italic">Thành viên nhóm:</p>
            <ul>
                <li>Nguyễn Tấn Phát</li>
                <li>Nguyễn Duy Khang</li>
                <li>Nguyễn Vĩnh Sang</li>
                <li>Nguyễn Phúc Bình Khang</li>
                <li>Trần Thanh Hải</li>
            </ul>
            <a href="https://github.com/iceghost/petri-net-visualizer">
                <svg
                    class="w-4 h-4 mt-4"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                        fill="#1B1F23"
                    />
                </svg>
            </a>
        </div>
    </div>
</main>
