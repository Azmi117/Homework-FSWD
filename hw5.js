class Pendaftar {
  constructor(nama, umur, uangSaku) {
    this.nama = nama;
    this.umur = umur;
    this.uangSaku = uangSaku;
  }
}

class FormRegistrasi {
  constructor() {
    this.formHTML = `
      <form id="registration-form">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input type="text" id="nama" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="umur">Umur:</label>
          <input type="number" id="umur" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="uang-saku">Uang Saku:</label>
          <input type="number" id="uang-saku" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    `;
  }

  render() {
    document.getElementById('registration-form').innerHTML = this.formHTML;
    document.getElementById('registration-form').addEventListener('submit', this.onSubmit.bind(this));
  }

  async onSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSaku = parseInt(document.getElementById('uang-saku').value);

    if (nama.length < 10 || umur < 25 || uangSaku < 100000 || uangSaku > 1000000) {
      alert('Mohon isi form dengan benar.');
      return;
    }

    const pendaftar = new Pendaftar(nama, umur, uangSaku);
    await PendaftarList.addPendaftar(pendaftar);
    await PendaftarList.render();

    // Reset form
    event.target.reset();
  }
}

class PendaftarList {
  static pendaftarList = [];

  static async addPendaftar(pendaftar) {
    this.pendaftarList.push(pendaftar);
  }

  static async render() {
    const tableHTML = `
      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Uang Saku</th>
          </tr>
        </thead>
        <tbody>
          ${this.pendaftarList.map(pendaftar => `
            <tr>
              <td>${pendaftar.nama}</td>
              <td>${pendaftar.umur}</td>
              <td>${pendaftar.uangSaku}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    document.getElementById('pendaftar-table').innerHTML = tableHTML;

    const rataRataUmur = this.calculateAverage('umur');
    const rataRataUangSaku = this.calculateAverage('uangSaku');

    document.getElementById('resume').innerHTML = `
      Rata-rata pendaftar memiliki uang saku sebesar ${rataRataUangSaku} dengan rata-rata umur ${rataRataUmur}.
    `;
  }

  static calculateAverage(field) {
    const sum = this.pendaftarList.reduce((acc, pendaftar) => acc + pendaftar[field], 0);
    return sum / this.pendaftarList.length;
  }
}

const formRegistrasi = new FormRegistrasi();
formRegistrasi.render();
