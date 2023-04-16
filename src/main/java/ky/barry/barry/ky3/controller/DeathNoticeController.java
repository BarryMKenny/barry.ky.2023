package ky.barry.barry.ky3.controller;

import ky.barry.barry.ky3.domain.DeathNotice;
import ky.barry.barry.ky3.service.DeathNoticeService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@Slf4j
public class DeathNoticeController {

    private DeathNoticeService deathNoticeService;

    @GetMapping("/death-notices")
    public List<DeathNotice> getDeathNotices(@RequestParam("county") String county, @RequestParam("searchText") String searchText
            , @RequestParam("dateFrom") String dateFrom, @RequestParam("dateTo") String dateTo) throws IOException {
        log.info("/death-notices request received. County is: " + county + " and searchText is: " + searchText);
        return deathNoticeService.getDeathNoticesForCountyAndSearchText(county, searchText, dateFrom, dateTo);
    }
}
